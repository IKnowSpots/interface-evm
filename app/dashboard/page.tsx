"use client";
import { fetchUsername } from "@/utils";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [username, setUsername] = useState<String>("");
    const [loading, setLoading] = useState<Boolean>(false);

    useEffect(() => {
        getUsernameCall();
    }, []);

    async function getUsernameCall() {
        setLoading(true);
        let varUsername: any = await fetchUsername();
        setUsername(varUsername);
        // setUsername("");
        setLoading(false);
    }

    console.log("check2", username);

    if (username != "") {
        redirect("/dashboard/active");
    }

    return (
        <div>
            <RenderSetUsername />
        </div>
    );
};

function RenderSetUsername() {
    return (
        <div>
            <p className="text-white">hey</p>
        </div>
    );
}

export default Dashboard;
