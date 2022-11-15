
class RickAndMorty {
    getCharacter(idChar) {
        if(!Number.isNaN(idChar) || !Number.isFinite(idChar)){
            throw new Error('Parametr is invalid')
        }
        return fetch(`https://rickandmortyapi.com/api/character/${idChar}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } 
            return null    
        })
        .then (responseJson => {
            if(!responseJson) {
                return null
            }
            return responseJson
        })
        .catch(err => console.error('Error: ', err))
    }
    async getEpisode(idEpis) {
        try {
            if (!Number.isNaN(idEpis) || !Number.isFinite(idEpis)) {
                throw new Error("Parametr is invalid")
            }
            const episode = await fetch(`https://rickandmortyapi.com/api/episode/${idEpis}`)
            if (!episode.ok) {
              return null
            }
            const result = await episode.json()
            if (!result) {
              return null
            }
            return result;
        } catch (err) {
            console.error("Error: ", err)
        }     
    }
}