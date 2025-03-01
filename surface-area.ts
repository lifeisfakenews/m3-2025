const houses = {    //m^2, floors
    "semi_detached": [96, 2],
    "flat": [59, 3],
    "maisonette": [74, 2],
    "terraced": [139, 3],
};

const room_height = 2.4;//m

type Result = {
    [key: string]: number
}
let result:Result = {};

for (const [type, [area, floors]] of Object.entries(houses)) {
    let per_floor = area / floors;
    let side = Math.sqrt(per_floor);
    let roof_side = side / (2 * Math.cos(45));
    let num_exposed_walls = 4;
    let roof_type = "pitched";
    if (type === "terraced") {
        num_exposed_walls = 2;
    }
    if (type === "flat") {
        roof_type = "flat";
    }
    let surface_area = per_floor + num_exposed_walls*(side * room_height * floors) + 2*(roof_side * side);
    result[type] = Math.round(surface_area);
};

console.log(result);

for (const [type, area] of Object.entries(result)) {
    console.log(`${type}: ${area} m^2`);
}