/**
    DataModel.js

    @author:
      - Derek Johnston

    @desc:
      - A class for handling the application's data.
*/
class DataModel {
  /**
    constructor(props)

    @desc:
      - Create an instance of this class.

    @param:
      - props (Object): The component's properties passed in by the parent.

    @return:
      - A new class object.
  */
  constructor() {
    console.log("Instantiating a DataModel object.");
    this.localRef = "donate_to_dreams_data_model"
    if (localStorage.getItem(this.localRef)) {
      console.log("Data does exists");
      this.data = JSON.parse(localStorage.getItem(this.localRef));
    } else {
      console.log("No data detected, creating empty model.");
      this.data = {
        summary: {},
        participants: {}
      }
    }
  }

  /**
    update()

    @desc:
      - Upload a fresh copy of the data model to local storage.

    @param:
      - null

    @return:
      - null
  */
  update() {
    const dataString = JSON.stringify(this.data);
    localStorage.setItem(this.localRef, dataString);
    console.log("Data is updated.");
  }

  /**
    refresh()

    @desc:
      - Have the model refresh itself from local storage.

    @param:
      - null

    @return:
      - null
  */
  refresh() {
    if (localStorage.getItem("donate_to_dreams_data_model")) {
      this.data = JSON.parse(localStorage.getItem("donate_to_dreams_data_model"));
      console.log("Data model is refreshed from local storage.");
    } else {
      console.log("Attempted to refresh, no data is available.");
    }
  }
}

export default DataModel;
