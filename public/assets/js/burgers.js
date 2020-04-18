$(() => {
  // devour button event handler
  $(".eat-burger").on("click", function () {
    const id = $(this).data("id");
    const updateBurger = {
      devoured: true
    };

    console.log(id);

    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: JSON.stringify(updateBurger),
      contentType: "application/json; charset=UTF-8"
    }).then(() => {
      location.reload();
    });
  });

  // form submit handler
  $(".create-burger").on("submit", (event) => {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#name").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => {
      location.reload();
    });
  });
});
