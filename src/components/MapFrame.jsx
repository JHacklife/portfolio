import React, { useEffect, useState } from 'react'
import { Button, Grid, Stack } from '@mui/material'

/**
 * Renderiza un iframe con un mapa de Google que muestra la ubicación especificada.
 *
 * @param {string} location - La ubicación a mostrar en el mapa.
 * @param {string} height - La altura del iframe en píxeles.
 * @param {string} width - El ancho del iframe como porcentaje o píxeles.
 * @return {JSX.Element} - El elemento iframe con el mapa de Google.
*/
export default function MapFrame({ location, height = "400", width = "100%", map, streetView }) {

	const [address, setAddress] = useState(null)
	const [latitude, setLatitude] = useState(null)
	const [longitude, setLongitude] = useState(null)

	useEffect(() => {
		try {
			if (streetView) {
				fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json`)
					.then(response => response.json())
					.then(data => {
						if (data.length > 0) {
							setLatitude(data[0].lat)
							setLongitude(data[0].lon)
						}
						setAddress(data[0]?.display_name)
					})
					.catch(error => {
						console.error('Error al traer las coordenadas:', error)
					})
			}
		} catch (error) {
			console.error('Error al traer las coordenadas:', error)
		}
	}, [location])

	return <>
		<Grid container>
			{/* MAPA */}
			{map && <Grid item xs={12} sm md lg xl>
				<iframe width={width} height={height} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
					src={`https://www.google.com/maps?q=${location || address ? encodeURIComponent(location || address) : ""}&output=embed`}>
				</iframe>
			</Grid>}

			{/* BOTH */}
			{map && streetView && latitude && longitude && <Grid item xs={12} sm md lg xl>
				<iframe
					title="Google Street View"
					width={width}
					height={height}
					frameBorder="0"
					style={{ border: 0 }}
					src={`https://www.google.com/maps/embed?pb=6m8!1m7!!2m2!1d${latitude}!2d${longitude}!3f1!4f1!5f0.4000000000000002`}
					allowFullScreen
				></iframe>
			</Grid>}

			{/* STREETVIEW */}
			{(streetView && !map)
				? latitude && longitude ?
					<Grid item xs={12} sm md lg xl>
						<iframe
							title="Google Street View"
							width={width}
							height={height}
							frameBorder="0"
							style={{ border: 0 }}
							src={`https://www.google.com/maps/embed?pb=6m8!1m7!!2m2!1d${latitude}!2d${longitude}!3f1!4f1!5f0.4000000000000002`}
							allowFullScreen
						></iframe>
					</Grid>
					: <Grid item xs={12} sm md lg xl>
						<iframe width={width} height={height} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
							src={`https://www.google.com/maps?q=${encodeURIComponent(address || location)}&output=embed`}>
						</iframe>
					</Grid> : null}
		</Grid>
	</>
}
