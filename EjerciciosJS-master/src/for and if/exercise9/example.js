console.log("\nGRUB:")
const garnish = ["potatos", "rize"];
const dishes = ["chicken", "fish", "meat"];
for ( outer of garnish ) {
    for ( inner of dishes ) {
        console.log(`${inner} & ${outer}`);
    }
}