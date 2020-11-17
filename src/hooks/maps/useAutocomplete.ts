import { useEffect, useState } from "react"

export const useAutoComplete = (query: string) => {

    const [predictions, setPredictions] = useState<Array<string>>([])

    const lviv = new google.maps.LatLng(49.842957, 24.031111)

    const autocompleteService = new google.maps.places.AutocompleteService()

    useEffect(() => {

        if(!query) return

        (() => {
            try {

                console.log('call')

                autocompleteService.getPlacePredictions({ 
                    input: query,
                    location: lviv,
                    radius: 10000,
                    componentRestrictions: {
                        country: 'ua'
                    },
                    types: ['address']
                }, predictions => predictions && setPredictions(predictions.map(i => i.description)))

            } catch (err) {
                console.log(err)
            }
        })()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    return predictions
}