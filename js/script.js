

  $("form").on("submit", handleGetData)
  
  function handleGetData(event) {
    event.preventDefault()
    userInput = $('#searchinput').val()

$.ajax({
    method: "POST",
    url: "https://narutoql.up.railway.app/graphql",
    contentType: "application/json",
    data: JSON.stringify({
      query: `query {
        characters(filter: {name: "${userInput}"}) {
          results {
            _id
            age
            name
            firstAnimeAppearance
            firstMangaAppearance
            nameMeaning
            notableFeatures
            avatarSrc
            description
            rank
            village
          }
        
        }
      }`
    })
  }).then((data) => {
    console.log(data);
          characters = data,
          render(data);

        (error) => {
          console.log("bad request", error)
        }
    })
  }

function render(data) {
  $("#name").text(data.data.characters.results[0].name)
  $("#village").text(data.data.characters.results[0].village)
  $("#rank").text(data.data.characters.results[0].rank)
  $("#age").text(data.data.characters.results[0].age)
  $("#firstAnimeAppearance").text(data.data.characters.results[0].firstAnimeAppearance)
  $("#firstManagaAppearance").text(data.data.characters.results[0].firstManagaAppearanc)
  $("#description").text(data.data.characters.results[0].description)
  $("#notableFeatures").text(data.data.characters.results[0].notableFeature)
  $("#avatarSrc").text(data.data.characters.results[0].avatarSrc)
}