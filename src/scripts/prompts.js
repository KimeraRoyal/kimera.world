var canvas = document.getElementById("prompt-generator");
var context = canvas.getContext("2d");

function getMousePos(canvas, event)
{
    var rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
}

var clickZones = [];

class ClickZone
{
    rect = {x: 0, y: 0, width: 0, height: 0};
    
    isMouseDown = false;
    isClicked = false;

    constructor(rect)
    {
        this.rect = rect;

        clickZones.push(this);
    }

    reset()
    {
        this.isMouseDown = false;
        this.isClicked = false;
    }
}

function isInside(pos, rect)
{
    return pos.x > rect.x && pos.y > rect.y && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height;
}

canvas.addEventListener('mousedown', function(evt)
{
    var mousePos = getMousePos(canvas, evt);
    for(let i = 0; i < clickZones; i++)
    {
        if (isInside(mousePos, clickZones[i].rect))
        {
            clickZones[i].isMouseDown = true;
        }
    }
}, false);

canvas.addEventListener('click', function(evt)
{
    var mousePos = getMousePos(canvas, evt);
    for(let i = 0; i < clickZones; i++)
    {
        if (isInside(mousePos, clickZones[i].rect))
        {
            clickZones[i].isClicked = true;
        }
    }
}, false);

class ColoredRectangle
{
    rect;
    color;
    outlineWidth;
    outlineColor;

    constructor(rect, color, outlineWidth = 0, outlineColor = "rgb(0, 0, 0)")
    {
        this.rect = rect;
        this.color = color;

        this.outlineWidth = outlineWidth;
        this.outlineColor = outlineColor;
    }

    draw()
    {
        if(this.outlineWidth > 0)
        {
            context.fillStyle = this.outlineColor;
            context.fillRect(this.rect.x - this.outlineWidth, this.rect.y - this.outlineWidth, this.rect.width + this.outlineWidth * 2, this.rect.height + this.outlineWidth * 2);
        }

        context.fillStyle = this.color;
        context.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }
}

class Button
{
    constructor(rect, height, color, outlineWidth = 0, outlineColor = "rgb(0, 0, 0)")
    {
        this.clickZone = new ClickZone(rect);
        this.clicked = false;

        rect.height -= height;

        this.rect = rect;
        this.height = height;

        this.topRect = new ColoredRectangle(rect, color, outlineWidth, outlineColor);
        this.bottomRect = new ColoredRectangle({x: rect.x, y: rect.y + height, width: rect.width, height: rect.height}, color, outlineWidth, outlineColor);
    }

    update()
    {
        if(this.clickZone.isMouseDown)
        {
            this.clicked = true;
        }

        if(this.clickZone.isClicked)
        {
            this.clicked = false;
        }

        this.clickZone.reset();
    }

    draw()
    {
        if(this.clicked)
        {
            this.topRect.y = this.rect.y + this.height;
        }
        else
        {
            this.topRect.y = this.rect.y;
            this.bottomRect.draw();
        }
        this.topRect.draw();
    }
}

var button = new Button({x: 10, y: 10, width: 100, height: 50}, 5, "rgb(255, 255, 255)", 1)

function draw()
{
    button.draw();
}

function update()
{
    requestAnimationFrame(() =>
    {
        button.update();
        draw();

        update();
    });
}

update();