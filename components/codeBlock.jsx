import React from "react";

export default function CodeBlock( {question} ) {
    return (
        <div className="flex items-center self-stretch bg-[#e3f8ff] py-2.5 ml-10">
            <span className="text-[#857857] text-sm text-center w-[7px] mx-4" >
                {"1\n2\n3\n4\n5\n6\n7"}
            </span>
            <span className="text-black text-sm w-[196px]" >
                {"package mian\n\nimport “fmt”\n\nfunc main() {\n      fmt.Println(“Hello, world!”)\n}"}
            </span>
        </div>

)
}