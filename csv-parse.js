const path_csv = "./data/ppfi_pcon (1).csv";
const file_csv = Bun.file(path_csv);

const path_json = "./data/insulation.json";


const text = await file_csv.text();
const lines = text.split("\n");
const headings = lines[0].split(",").map(x => x.toLowerCase().trim());

const not_needed = [
    "indicator_wall_insulation",
    "indicator_roof_insulation",
    "indicator_floor_insulation",
    "indicator_property_type",
    "indicator_property_age",
    "indicator_age_population",
    "indicator_health_conditions",
    "indicator_fuel_poverty",
    "country_denominator",
    "geo_type",
    "combined",
];
console.log(headings);

let json_data = [];
for (let i = 1; i < lines.length-1; i++) {
    const line = lines[i].split(",");
    const obj = {};
    for (let j = 0; j < headings.length; j++) {
        obj[headings[j]] = line[j];
    }
    json_data.push(obj);

}

const places = ["Birmingham Edgbaston", "Birmingham Erdington", "Birmingham Hall Green and Moseley", "Birmingham Hodge Hill and Solihull North", "Birmingham Ladywood", "Birmingham Northfield", "Birmingham Perry Barr", "Birmingham Selly Oak", "Birmingham Yardley", "Sutton Coldfield"];

json_data = json_data.filter(x => places.includes(x.geo_name))

for (let x of json_data) {
    for (let y of not_needed) {
        delete x[y];
    }
}


json_data.sort((x, y) => x.indicator_property_age_deciles - y.indicator_property_age_deciles)

Bun.write(path_json, JSON.stringify(json_data, null, 2));

console.log(json_data);