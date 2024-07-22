"use client"
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";

export function Header(){

    const session = useSession();
    return (
        <header>
            <div>
                {
                    session.data ? (<Button>Sign Out</Button>) : 
                    (<Button onClick={()=>signIn("google")}>Sign In</Button>)
                }
                <ModeToggle/>
            </div>
        </header>
    )
}