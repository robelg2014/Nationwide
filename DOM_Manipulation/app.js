console.log("Working")

//var box = document.querySelector("#box")

//console.log(box)

const data = [
    { name: "Megatron", address: "Cybertron" },
    { name: "Some guy", address: "Some street" },
    { name: "Grace Hopper", address: "Arlington, Virginia" },
    { name: "Ching Shih", address: "The High Seas" },
    { name: "Slimer", address: "The Library" },
    { name: "Umbra", address: "The Void" },
    { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
    { name: "Matt Huntington", address: "Remote" },
    { name: "Ronald McDonald", address: "Casa del McDonalds" },
    { name: "Jem", address: "Starlight Music" }
    ];

    for(var counter=0; counter < data.length; counter ++){
        const $container = $('<div>').addClass('container')
       
        const $nameDiv = $('.container').addClass('name').text(data[counter].name)
        const $nameDiv = $('<div>').addClass('name').text(data[counter].name)
        const $address = $('<div>').addClass('address').text(data[counter].address)
        $container.append($nameDiv)
        $container.append($address)
        $('body').append($container)
    }

    var populateData = () =>{
        for(var counter=0; counter < data.length; counter ++){
            const $container = $('<div>').addClass('container')
           
            const $nameDiv = $('.container').addClass('name').text(data[counter].name)
            const $nameDiv = $('<div>').addClass('name').text(data[counter].name)
            const $address = $('<div>').addClass('address').text(data[counter].address)
            $container.append($nameDiv)
            $container.append($address)
            $('body').append($container)
        }
    }

            var addData = () =>{
                data.push({ name:newName, address:newAddress })
                populateData()
            }
        
            addData("Tory","123 Sesame Street")


        populateData()
