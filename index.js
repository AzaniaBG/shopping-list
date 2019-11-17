$(function groceryList() {

    $("#js-shopping-list-form").submit(function handleSubmit(event) {
        //stops browser doing the default form action, i.e., submission:
        event.preventDefault();
//find the value of anything typed into `input` and store in variable 'item':   
        const item = $(this).find('input[name="shopping-list-entry"]').val();
        $(item).addClass("shopping-list", "shopping-item");
//add item to the end of <ul> shopping list as new <li>:
        $('.shopping-list').append(`<li>${item}</li><span>${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>`);

        
    });

    $("button").on("click", function(event) {
        $(this).closest("li").toggleClass("shopping-item__checked");
    });

//listen for the "check" button and toggle corresponding class:
//(target all <ul> descendants with the specified class name:
    $("button.shopping-item-delete").on("click", function remove(event) {
//remove the ele clicked:
            $(this).closest("li").remove();
        

    });


 
} );



$(groceryList);