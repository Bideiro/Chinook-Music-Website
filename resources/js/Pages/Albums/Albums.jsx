import Navbar from "../../Layouts/Navbar";

function Albums( { Albums }) {
    return (
        <>
            <h1 className="title text-2xl">asdas</h1>

            <div>
                {Albums.map( album => (
                    <div id={album.AlbumId}>
                        <h1>{album.Title}</h1>
                    </div>
                ))}
            </div>
        </>
    );
};


Albums.layout = page => <Navbar children={page} />

export default Albums;


