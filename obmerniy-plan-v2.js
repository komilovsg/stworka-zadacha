// Данные о стенах: длины в мм и углы в градусах
const walls = [
    { length: 1665, angle: 0 },
    { length: 947, angle: 90 },
    { length: 557, angle: 0 },
    { length: 1300, angle: 90 },
    { length: 2225, angle: 180 },
    { length: 2239, angle: 270 }
];

// Конвертируем длины из мм в см
walls.forEach(wall => {
    wall.length = wall.length / 10;
});

// Инициализируем массив точек с начальной точкой (0, 0)
const points = [{ x: 0, y: 0 }];

// Вычисляем координаты точек на основе углов и длин стен
walls.forEach(wall => {
    const lastPoint = points[points.length - 1];
    let newPoint;

    switch (wall.angle) {
        case 0:
            newPoint = { x: lastPoint.x + wall.length, y: lastPoint.y };
            break;
        case 90:
            newPoint = { x: lastPoint.x, y: lastPoint.y + wall.length };
            break;
        case 180:
            newPoint = { x: lastPoint.x - wall.length, y: lastPoint.y };
            break;
        case 270:
            newPoint = { x: lastPoint.x, y: lastPoint.y - wall.length };
            break;
        default:
            throw new Error(`Unsupported angle: ${wall.angle}`);
    }

    points.push(newPoint);
});

// Вывод координат точек
points.forEach((point, index) => {
    console.log(`Точка №${index + 1} - ${point.x}, ${point.y}`);
});

// Ответ:
// Точка №1 - 0, 0
// Точка №2 - 166.5, 0
// Точка №3 - 166.5, 94.7
// Точка №4 - 222.2, 94.7
// Точка №5 - 222.2, 224.7
// Точка №6 - -0.30000000000001137, 224.7
// Точка №7 - -0.30000000000001137, 0.799999999999983