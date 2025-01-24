import './home.css';

export const Home = () => {
    return <div className="parent">
        <h2 className="title">IP Address Tracker</h2>
        <form action="" className="search_container">
            <input 
                type="text" 
                className="input" 
                placeholder= "Search for any IP address or domain"
            />
            <button className="search_button" type="submit">G</button>
        </form>

        <div className="info_wrapper">
            <div className="info">
                <h2>IP Address</h2>
                <strong>8.8.8.8</strong>
            </div>
            <div className="info">
                <h2>Location</h2>
                <strong>California, US</strong>
            </div>
            <div className="info">
                <h2>Timezone</h2>
                <strong>utc-08:00</strong>
            </div>
            <div className="info">
                <h2>ISP</h2>
                <strong>Google LLC</strong>
            </div>
        </div>
    </div>;
}