function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function onClickEffect(btn, style) {
  btn.removeClass("btn-light");
  btn.addClass(style);
  await sleep(250);
  btn.removeClass(style);
  btn.addClass("btn-light");
}

$(document).ready(function () {
  // Create butons
  $(".page__content pre > code").each(function () {
    $(this)
      .parent()
      .prepend(
        $(document.createElement("button"))
          .prop({
            type: "button",
            innerHTML: '<i class="far fa-copy"></i>',
          })
          .attr("title", "Copy to clipboard")
          .addClass("btn")
          .addClass("btn--primary")
          .css("position", "absolute")
          .css("right", "1em")
          // Click listener
          .on("click", function () {
            let codeElement = $(this).parent().children("code").first();

            if (!codeElement) {
              throw new Error(
                "Unexpected error! No corresponding code block was found for this button."
              );
            }

            // Blink effect
            onClickEffect($(this), "btn--success");

            // Copy to clipoard function
            navigator.clipboard.writeText($(codeElement).text()).then(
              () => true,
              () => true
            );
            return true;
          })
      );
  });
});
