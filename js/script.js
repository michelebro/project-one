$.ajax({
    method: "POST",
    url: "https://narutoql.up.railway.app/graphql",
    contentType: "application/json",
    data: JSON.stringify({
      query: `query {
        characters(filter: {name: userIput }) {
          info {
            count
            pages
            next
            prev
          }
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
  }).then(data => console.log(data))


  et character, userInput

$("form").on("submit", handleGetData)

function handleGetData(event) {
  event.preventDefault()
  userInput = $input.val()
  
//   $.ajax({
//     url: "https://www.omdbapi.com/?apikey=53aa2cd6&t=" + userInput,
//   }).then(
//     (data) => {
//       movieData = data
//       render()
//     },
//     (error) => {
//       console.log("bad request", error)
//     }
//   )
// }

function render() {
  $name.text(character.name)
  $village.text(character.village)
  $rank.text(character.rank)
}