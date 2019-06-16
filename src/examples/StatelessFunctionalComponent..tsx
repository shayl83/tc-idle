import * as React from "react";
interface StatelessReactComponentProps {
    Title: string
    Image?: string
    Body: string
}

export const StatelessReactComponent: React.FC<StatelessReactComponentProps> =
    ({ Title, Image, Body }) => (
        <div className="card">
            <div className="title">{Title}</div>
            {Image &&
            <div className="image">
                <img src={Image} />
            </div>
            }
            <div className="body">{Body}</div>
        </div>
    );