import * as React from "react";
import { ImageList, ImageListItem } from "@mui/material";

export default function Gallery({ images }) {
    return (
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {images && images.length > 0
                ? images.map((image, index) => (
                    <ImageListItem key={index}>
                        <img
                            src={`${image.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${image.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={image.title}
                        />
                    </ImageListItem>
                ))
                : null}
        </ImageList>
    );
}


