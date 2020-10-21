import React from 'react'
import { useContent } from '../Hooks';
export default function Browse() {
    // we need the series and the films
    const { series } = useContent('series');
    const { films } = useContent('films');

    // we need slides
    // pass it to the browse container
    return (
        <div>
            Browse
        </div>
    )
}
