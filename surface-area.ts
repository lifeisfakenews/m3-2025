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

const ROOF_ANGLE = 45 * Math.PI / 180;

for (const [type, [area, floors]] of Object.entries(houses)) {
    let per_floor = area / floors;
    let side = Math.sqrt(per_floor);
    let roof_side = side / (2 * Math.cos(ROOF_ANGLE));
    let num_exposed_walls = 3;
    let roof_type = "pitched";
    if (type === "terraced") {
        num_exposed_walls = 2;
    }
    if (type === "flat") {
        roof_type = "flat";
    }
    let roof_area = 2*(roof_side * side)
    
    if (type !== "terraced" && roof_type === "pitched") {
        roof_area += 0.5 * (side/2) * roof_side * Math.sin(ROOF_ANGLE);
    };
    let surface_area = per_floor + num_exposed_walls*(side * room_height * floors) + roof_area;
    console.log(`${type} (roof): ${roof_area}m^2`);
    result[type] = Math.round(surface_area);
};

for (const [type, area] of Object.entries(result)) {
    console.log(`${type} (walls + roof): ${area} m^2`);
}