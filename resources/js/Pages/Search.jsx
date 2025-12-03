
import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";

import { React, useState, useMemo } from 'react';

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Input, Button } from '@headlessui/react';
import { AgGridReact } from "ag-grid-react";

import { CheckIcon } from '@heroicons/react/20/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Search({ tracks, albums }) {
    const [albumList, setAbums] = useState(albums);
    const [trackList, setTracks] = useState(tracks);

    const [selectedAlbum, setSelAlbum] = useState(albums[0]);

    const [searchterm, setSearchTerm] = useState("");

    const fetchSearch = async (searchterm) => {
        if (!searchterm) {
            setTracks(tracks)
        } else {
            const res = await fetch(`api/search/${searchterm}`);
            const data = await res.json();
            setTracks(data);
        }
    }

    const [colDefs, setColDefs] = useState([
        { field: "Name", filter: true, headerName: 'Track Name' },
        { field: "Title", filter: true, headerName: 'Album Title' },
        { field: "ArtistName", filter: true, headerName: 'Artist' },
        { field: "Genre", filter: true }
    ]);

    return (
        <>
            <div className="ml-10 mr-10 mt-10 font-montserrat text-4xl">
                Feel Free to browse our library.
            </div>
            <div className="ml-10 mr-10">
                <div className="p-5 flex justify-end ">
                    <Input type="text" name="searchterm" className="border h-8 w-full max-w-xs p-2 rounded-l-full data-hover:shadow"
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            fetchSearch(e.target.value);
                        }
                        }
                        value={searchterm} />
                    <Button
                        onClick={(input) => { fetchSearch(searchterm) }}
                        className="rounded-r-full bg-[#DBBEA1] text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500">
                        <MagnifyingGlassIcon className=" h-8 w-15 p-1 text-black " />
                    </Button>


                </div>
            </div>
            <div className="mr-10 ml-10 mb-10 mt-5 h-200">
                <AgGridReact
                    rowData={trackList}
                    columnDefs={colDefs}
                    autoSizeStrategy={{ type: "fitGridWidth" }}
                />
            </div>

        </>
    )
}

Search.layout = page => (
    <>
        <Navbar />
        {page}
        <Footer />
    </>
);

export default Search;