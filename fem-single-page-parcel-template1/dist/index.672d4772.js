document.querySelector(".__btn").addEventListener("click", function(e) {
    var emailInput = document.querySelector(".__form");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(pattern)) {
        e.preventDefault();
        document.querySelector(".__incorrect-email").style.display = "block";
    } else document.querySelector(".__incorrect-email").style.display = "none";
});

//# sourceMappingURL=index.672d4772.js.map
