import React from 'react';

function Home() {
    console.log("RENDER HOME")
    return (
        <div>
            <div className="row">
                <div className="col border">
                    <div className="text-center"> 
                        Welcome to MedicApp
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;