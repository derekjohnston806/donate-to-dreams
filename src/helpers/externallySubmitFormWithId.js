/**
    externallySubmitFormWithId.js

    @author:
      - Derek Johnston

    @desc:
      - Given the id for a form element, generate a fake input[type="submit"]
        element and click it to trigger a submit event. Then destroy the
        button.

    @param:
      - id (String): The element id for the form.

    @return:
      - null
*/
function externallySubmitFormWithId(id) {
  const button = document.createElement("input");
  button.type = "submit";
  button.id = "form-submit-button";
  $("#" + id).append(button);
  $("#form-submit-button").click();
  $("#form-submit-button").remove();
}

export default externallySubmitFormWithId;
