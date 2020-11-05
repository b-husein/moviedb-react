import React from 'react'

function Result({ result, openPopup }) {
	return (
		<div className="result">
			<img src={result.Poster} alt="Poster" />
			<h3>{result.Title}</h3>
		</div>
	)
}

export default Result