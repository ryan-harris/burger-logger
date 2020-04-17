$(() => {
  // devour button event handler
  $(".eat-burger").on("click", function () {
    const id = $(this).data("id");
    const updateBurger = {
      devoured: 1
    };

    console.log(id);

    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: updateBurger
    }).then(() => {
      location.reload();
    });
  });

  // form submit handler
  $(".create-burger").on("submit", (event) => {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#name").val().trim(),
      devoured: false
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => {
      location.reload();
    });
  });
});
