// interface Wall {
//     length: number;
//     angle: number;
// }

// const walls: Wall[] = [
//     { length: 1665, angle: 0 },
//     { length: 947, angle: 90 },
//     { length: 557, angle: 0 },
//     { length: 1300, angle: 90 },
//     { length: 2225, angle: 180 },
//     { length: 2239, angle: 270 }
// ];

// // Конвертируем длину из мм в см
// walls.forEach(wall => {
//     wall.length = wall.length / 10;
// });

// interface Point {
//     x: number;
//     y: number;
// }

// const points: Point[] = [{ x: 0, y: 0 }];

// walls.forEach(wall => {
//     const lastPoint = points[points.length - 1];
//     let newPoint: Point;

//     switch (wall.angle) {
//         case 0:
//             newPoint = { x: lastPoint.x + wall.length, y: lastPoint.y };
//             break;
//         case 90:
//             newPoint = { x: lastPoint.x, y: lastPoint.y + wall.length };
//             break;
//         case 180:
//             newPoint = { x: lastPoint.x - wall.length, y: lastPoint.y };
//             break;
//         case 270:
//             newPoint = { x: lastPoint.x, y: lastPoint.y - wall.length };
//             break;
//         default:
//             throw new Error(`Unsupported angle: ${wall.angle}`);
//     }

//     points.push(newPoint);
// });

// // Вывод координат
// points.forEach((point, index) => {
//     console.log(`Точка №${index + 1} - ${point.x}, ${point.y}`);
// });
