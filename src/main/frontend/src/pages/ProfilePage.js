import React, { useState } from "react";
// import Header from "../components/Header";
import Header from "../components/Header";
import useAuth from "../services/useAuth";
import { Tabs, Tab, Container } from "react-bootstrap";
import "../styles/Profile.scss";
import {
    BsFillPencilFill,
    BsFillPersonFill,
    BsFillShieldLockFill,
} from "react-icons/bs";
import PasswordChangeTab from "../components/ProfileTabs/PasswordChangeTab";
import ProfileDetailsTab from "../components/ProfileTabs/ProfileDetailsTab";
import ProfileEditTab from "../components/ProfileTabs/ProfileEditTab";

const ProfilePage = () => {
    const auth = useAuth();
    const user = auth.user ? auth.user : null;
    const [key, setKey] = useState("profile");
    const [image, setImage] = useState("");

    return (
        <div className="profile">
            <Header />
            <h1 className="profile__title">My Profile</h1>
            <Container className="profile__tab__container">
                <Tabs
                    id="profile-tabs"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="profile__tabs"
                >
                    <Tab
                        eventKey="profile"
                        title={
                            <>
                                <span className="profile__tab__icon">
                                    <BsFillPersonFill />
                                </span>
                                Profile
                            </>
                        }
                        className="profile__tab"
                    >
                        <ProfileDetailsTab user={user} />
                    </Tab>
                    <Tab
                        eventKey="edit"
                        title={
                            <>
                                <span className="profile__tab__icon">
                                    <BsFillPencilFill />
                                </span>
                                Edit Profile
                            </>
                        }
                        className="profile__tab"
                    >
                        <ProfileEditTab user={user} />
                    </Tab>
                    <Tab
                        eventKey="reset"
                        title={
                            <>
                                <span className="profile__tab__icon">
                                    <BsFillShieldLockFill />
                                </span>
                                Reset Password
                            </>
                        }
                        className="profile__tab"
                    >
                        <PasswordChangeTab user={user} />
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
};

export default ProfilePage;
