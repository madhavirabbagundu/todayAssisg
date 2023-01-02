checkVehicle() {
    let CheckBox = document.getElementById("bike") as HTMLInputElement;
    let textData = document.getElementById("bike1") as HTMLInputElement;
    if (CheckBox.checked == true) {
      this.Bike = true;
      this.applicantVechicleOwn.push("Bike");

      console.log("bike", this.applicantVechicleOwn);
      // this.BikeVehicle = true;

    } else {
      // textData.style.display = "none";
      this.Bike = false;

      this.applicantVechicleOwn = this.applicantVechicleOwn.filter(
        (e) => e! == "Bike"
      );

      console.log("bike", this.applicantVechicleOwn);
      this.Movableform.patchValue({
        bike: 0,

      })
    }
  }

 
  






  // VechicleOwn checkboxes
  checkNoVehicle() {
    let noVehicle = document.getElementById("no_vehicles") as HTMLInputElement;
    let boxes = document.getElementById("no_vehicles1") as HTMLInputElement;
    let textData1 = document.getElementById("car1") as HTMLInputElement;
    let textData = document.getElementById("bike1") as HTMLInputElement;
    let textData2 = document.getElementById("Earth_Mover_1") as HTMLInputElement;
    let textData3 = document.getElementById("Tractor_1") as HTMLInputElement;

    console.log(boxes.value);

    // if ('checked' in noVehicle) {

    if (noVehicle.checked && noVehicle.value === "No") {

      this.applicantVechicleOwn = this.applicantVechicleOwn.filter((el) => el === noVehicle.value);

      // if(boxes.checked==true){

      boxes.style.display = "none";
      textData1.style.display = "none";
      textData.style.display = "none";
      textData2.style.display = "none";
      textData3.style.display = "none";



    } else if (noVehicle.checked == false) {
      boxes.style.display = "flex";
     

    }
    // if (noVehicle.checked) {
    //   this.applicantVechicleOwn.push(noVehicle.value);
    // } else {
    //   this.applicantVechicleOwn = this.applicantVechicleOwn.filter((el) => el !== noVehicle.value);
    // }

    console.log()
    console.log("REMOVE", this.applicantVechicleOwn);



  }

  //car function
  checkCarVehicle() {
    let CheckBox1 = document.getElementById("car") as HTMLInputElement;
    let textData1 = document.getElementById("car1") as HTMLInputElement;
    if (CheckBox1.checked == true) {
      this.Car = true;

      this.applicantVechicleOwn.push("Car");
      console.log("car", this.applicantVechicleOwn);


    } else {
      // textData1.style.display = "none";
      this.Car = false;

      this.applicantVechicleOwn = this.applicantVechicleOwn.filter(
        (e) => e! == "Car"
      );

      console.log("vehiclesowned", this.applicantVechicleOwn);
      this.Movableform.patchValue({
        car: 0,

      })
      console.log("car", this.applicantVechicleOwn);

    }
  }

  // EarthMover
  checkEarthVehicle() {
    let CheckBox2 = document.getElementById("Earth_Mover") as HTMLInputElement;
    let textData2 = document.getElementById("Earth_Mover_1") as HTMLInputElement;
    if (CheckBox2.checked == true) {
      this.EarthMover = true;

      this.applicantVechicleOwn.push("EarthMover");
     
      console.log("earthMover", this.applicantVechicleOwn);

    } else {
      // textData2.style.display = "none";
      this.EarthMover = false;

      this.applicantVechicleOwn = this.applicantVechicleOwn.filter(
        (e) => e! == "earthMover"
      );
      // this.EarthMoverVehicle = false;

      console.log("earthMover", this.applicantVechicleOwn);
      this.Movableform.patchValue({
        earthMover: 0,

      })
    }
  }
  checkTracktorVehicle() {
    let CheckBox3 = document.getElementById("Tractor") as HTMLInputElement;
    let textData3 = document.getElementById("Tractor_1") as HTMLInputElement;
    if (CheckBox3.checked == true) {
      this.Tractor = true;

      this.applicantVechicleOwn.push("Tractor");
     
      console.log("tractor", this.applicantVechicleOwn);
      // this.TractorVehicle = true;

    } else {
      // textData3.style.display = "none";
      this.Tractor = false;

      this.applicantVechicleOwn = this.applicantVechicleOwn.filter(
        (e) => e! == "tractor"
      );
      // this.TractorVehicle = false;

      console.log("tractor", this.applicantVechicleOwn);
      this.Movableform.patchValue({
        tractor: 0,

      })
    }

  }
