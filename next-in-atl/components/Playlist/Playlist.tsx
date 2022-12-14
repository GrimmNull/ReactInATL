import React from "react";
import { ISongInfo, Song } from "../Song/Song";
import styles from "./Playlist.module.scss";
import { IPrimary, IProps } from "../../slices/Song";
import { SliceLike, SliceZone, SliceZoneLike } from "@prismicio/react";
import { components } from "../../slices";

const songList: ISongInfo[] = [
    {
        imageLink: "./assets/Led Zeppelin.jpeg",
        title: "Dazed and Confused",
        album: "Led Zeppelin",
        duration: "6:24"
    },
    {
        imageLink: "./assets/Creatures of habits.jpeg",
        title: "The Drunk",
        album: "Creatures of Habit",
        duration: "3:54"
    },
];

interface IPlaylist {
    slices: SliceZoneLike<SliceLike<string>>;
    songsList: IPrimary[];
    currentIndex: number;
    setSong: (data: number) => void;
}

export interface ISliceContext {
    setSong: (data: number) => void;
    currentIndex: number;
    songsList: IPrimary[];
}

export const Playlist = (props: IPlaylist) => {

    return (
        <div className={styles.playlist}>
            <div className={styles["table-header"]}>
                <span className={styles["song-nr"]}>
                    #
                </span>
                <span className={styles["song-cover"]}>
                    Cover
                </span>
                <span className={styles["song-title"]}>
                    Title
                </span>
                <span className={styles["song-album"]}>
                    Album
                </span>
                <span className={styles["song-duration"]}>
                    Duration
                </span>
            </div>
            <div id="songs-wrapper" className={styles["songs"]}>
                {/* {songList.map(function (details, index) {
                    return <Song index={index + 1} songInfo={details}  />
                })} */}
                <SliceZone slices={props.slices} components={components} context={{
                    setSong: props.setSong,
                    songsList: props.songsList,
                    currentIndex: props.currentIndex
                } as ISliceContext} />
            </div>
        </div>

    );
};