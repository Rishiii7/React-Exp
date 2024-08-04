function Person() {
    this.name = "Yomesh";
    return this;
  }
  
  var person = new Person();
  console.log(person.name); // Yomesh
  
  function Car() {
    this.name = "BMW";
    return this.name; // because this is primitive value
  }
  
  var car = new Car();
  console.log(car)
  console.log(car.name); // Error / undefined
  
  function Animal() {
    var animals = [];
    animals.push("tiger");
    animals.alive = true;
    return animals;
  }
  
  var animals = new Animal();
  console.log(animals)
  console.log(animals.alive, Array.isArray(animals), animals[0] === "tiger"); // Output 3? //error
  
  function Rocket() {
    var rocket = () => {
      console.log("I am an rocket");
    };
    this.engines = 4;
    return rocket;
  }
  
  var rocket = new Rocket();
  rocket(); // Is there going to be an error? Output 4? I am an rocket
  console.log(rocket)
  console.log(rocket.engines); // Output 5? undefined
  
  function Company() {
    this.name = "OLX";
    return {};
  }
  
  var company = new Company();
  console.log(company)
  console.log(company.name); // Output 6? undefined