/* Enums (short for "enumerations") in TypeScript are a way to define a set of named constants. They allow you to assign friendly, human-readable names to a group of numeric or string values, making your code more readable and easier to maintain.

Enums are particularly useful when you have a fixed number of related options (e.g., days of the week, directions, roles, etc.).

 */

// If you don’t explicitly set a value, the first member starts at 0, and subsequent members increment by 1.


enum WeatherConditions1 {
    Sunny,
    Cloudy,
    Rainy
}
console.log(WeatherConditions1[2]);    // "Rainy" (Reverse mapping)
console.log(WeatherConditions1.Sunny); // this returns the index of the weather

enum WeatherConditions {
    Sunny = 'sunny',
    Cloudy = 'cloudy',
    Rainy = 'rainy'
}

console.log(WeatherConditions);
console.log(WeatherConditions.Sunny); // this returns the values