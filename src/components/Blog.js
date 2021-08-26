import React from "react";
import { TemplateIcon } from "@heroicons/react/solid";

export default function Blog() {
return (
<section id="blog">
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
    <div className="flex flex-col w-full mb-20">
        <TemplateIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
        🚧Dev Journal *UNDER CONSTRUCTION*🚧
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        just an update life talk for me
        </p>
    </div>

    </div>

</section>
);
}