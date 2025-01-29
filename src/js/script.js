const moveButton = document.querySelector('.univer-btn');
const character = document.querySelector('#player');

const pathPoints = [[
    { "x": 444, "y": 504 },
    {
        "x": 416,
        "y": 493
    },
    {
        "x": 399,
        "y": 468
    },
    {
        "x": 388,
        "y": 463
    },
    {
        "x": 348,
        "y": 473
    }
],
[
    {
        "x": 348,
        "y": 473
    },
    {
        "x": 321,
        "y": 493
    },
    {
        "x": 321,
        "y": 493
    },
    {
        "x": 299,
        "y": 503
    },
    {
        "x": 277,
        "y": 518
    }
], [
    {
        "x": 277,
        "y": 518
    },
    {
        "x": 248,
        "y": 530
    },
    {
        "x": 229,
        "y": 533
    },
    {
        "x": 212,
        "y": 535
    },
    {
        "x": 188,
        "y": 534
    }
],
[{
    "x": 188,
    "y": 534
},
{
    "x": 162,
    "y": 532
},
{
    "x": 145,
    "y": 526
},
{
    "x": 131,
    "y": 519
},
{
    "x": 108,
    "y": 506
}
], [
    {
        "x": 108,
        "y": 506
    },
    {
        "x": 94,
        "y": 498
    },
    {
        "x": 94,
        "y": 498
    },
    {
        "x": 85,
        "y": 490
    },
    {
        "x": 83,
        "y": 474
    },
    {
        "x": 88,
        "y": 469
    },
    {
        "x": 99,
        "y": 461
    },
    {
        "x": 122,
        "y": 443
    }
]
]

let currentArrIndex = 0;
let currentPathIndex = 0;
let start = true;

character.style.left = `${pathPoints[0][0].x - 20}px`;
character.style.top = `${pathPoints[0][0].y - 75}px`;

function restoreState() {
    const storedIndex = localStorage.getItem('currentArrIndex') || 0;

    if (storedIndex !== null) {
        currentArrIndex = parseInt(storedIndex);
        const firstPoint = pathPoints[currentArrIndex][0];
        character.style.left = `${firstPoint.x - 20}px`;
        character.style.top = `${firstPoint.y - 75}px`;
    }
}

function moveBlockThroughPath(path) {
    let delay = 0;
    if (start) {
        path.forEach((point, index) => {
            setTimeout(() => {
                character.style.left = `${point.x - 20}px`;
                character.style.top = `${point.y - 75}px`;
                if (index === 0) {
                    localStorage.setItem('currentArrIndex', currentArrIndex);
                }
            }, delay);
            delay += 200;
        });
    }

}

moveButton.addEventListener("click", () => {
    let length = pathPoints.length;
    if (currentArrIndex >= length) {
        currentArrIndex = 0;
        localStorage.setItem('currentArrIndex', currentArrIndex);
        start = false
        return;
    }
    if (currentArrIndex < length) {
        moveBlockThroughPath(pathPoints[currentArrIndex]);
        currentArrIndex += 1;
    }
});

restoreState();
