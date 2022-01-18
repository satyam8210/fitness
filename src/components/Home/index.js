import React, { useState, useEffect } from "react";
import Header from '../Header'
import Card from '../Card'

export default function Home() {
    return (
        <>
            <div>
                <Header />
                <main className="main container">
                    <div className="p-md-5 mb-4 text-white rounded bg-dark bg">
                        <div className="col-md-6 px-0">
                            <h1 className="display-4 fst-italic">Workout videos for every fitness level.Absolutely free.</h1>

                        </div>
                    </div>

                </main>

                <Card />
                <footer className="text-muted py-5 bg-dark">
                    <div className="container">
                        <p className="float-end mb-1">
                            <a href="#">Back to top</a>
                        </p>
                        <p className="mb-1 display-4 fst-italic">Thanks </p>

                    </div>
                </footer>

            </div>

        </>
    )
}