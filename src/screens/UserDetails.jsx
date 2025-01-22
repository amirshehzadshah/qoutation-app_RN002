import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert, View, Text } from 'react-native';
import UserDetailsCard from '../common/UserDetailsCard';
import EditableTextField from '../common/EditableTextField';
import ProfileImage from '../components/ProfileImage';
import SectionTitle from '../components/SectionTitle';
import Button from '../common/Button';
import Loader from '../components/Loader';
import { validateEmail, validatePhone } from '../utils/formValidation';
import useUserStore from '../store/useUserStore';
import ScreenLayout from '../layouts/ScreenLayout';
import DetailsCardLayout from '../layouts/DetailsCardLayout';
import OpenURLButton from '../components/OpenURLButton ';
import EditableDropdown from '../common/EditableDropdown';

const UserDetailsScreen = () => {

    const user = useUserStore((state) => state.user);
    const addUser = useUserStore((state) => state.addUser);
    const resetUser = useUserStore((state) => state.resetUser);

    const defaultUser = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '',
        jobTitle: 'Software Engineer',
        department: 'Engineering',
        companyName: 'Example Corp',
        location: 'New York',
        profileImageUri: '',
        companyAddress: '123 Main St, New York, NY',
        webAddress: 'http://example.com',
    };

    const [loading, setLoading] = useState(false);
    const [editable, setEditable] = useState(false);
    const [form, setForm] = useState(defaultUser);
    const [errors, setErrors] = useState({});

    const toggleEdit = () => {
        setEditable(!editable);
    };

    const handleCancel = () => {
        setLoading(true);
        setTimeout(() => {
            resetUser();
            setErrors({});
            setLoading(false);
            setEditable(false);
            Alert.alert('Profile update cancel');
        }, 3000);
    };

    const handleSave = () => {
        const { name, email, phone, jobTitle, department, companyName, location } = form;
        const newErrors = {};

        // Validations
        if (!name) newErrors.name = 'Name is required';
        if (!email || !validateEmail(email)) newErrors.email = 'Valid email is required';
        if (!phone || !validatePhone(phone)) newErrors.phone = 'Valid phone number is required';
        if (!jobTitle) newErrors.jobTitle = 'Job title is required';
        if (!department) newErrors.department = 'Department is required';
        if (!companyName) newErrors.companyName = 'Company name is required';
        if (!location) newErrors.location = 'Location is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setLoading(true);
            setTimeout(() => {
                addUser(form);
                setLoading(false);
                setEditable(false);
                Alert.alert('Profile updated successfully');
            }, 5000);
        }
    };

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const handleImagePick = (uri) => {
        handleChange('profileImageUri', uri);
    };

    useEffect(() => {
        if (!user || Object.keys(user).length === 0) {
            setForm(defaultUser);
        } else {
            setForm(user);
        }
    }, [user]);

    if (loading) return <Loader />;

    return (
        <ScreenLayout>

            <ProfileImage imageUri={form.profileImageUri} onImagePick={handleImagePick} editable={editable} />

            <View style={styles.User}>
                <Text style={styles.UserName}>{!user || Object.keys(user).length === 0 ? defaultUser.name : user.name}</Text>
                <Text style={styles.UserPosition}>{!user || Object.keys(user).length === 0 ? defaultUser.jobTitle : user.jobTitle}</Text>
            </View>

            {/* <Button title={editable ? 'Save Changes' : 'Edit Profile'} onPress={editable ? handleSave : toggleEdit} /> */}
            {editable ? (
                <View style={styles.ButtonsContainer}>
                    <Button title="Save Changes" onPress={handleSave} color='#1f2b64' />
                    <Button title="Cancel" onPress={handleCancel} color='#FF2600' />
                </View>
            ) : (
                <Button title="Edit Profile" onPress={toggleEdit} color='#df6338' />
            )}

            <DetailsCardLayout>
                <SectionTitle title="Personal Information" />

                <UserDetailsCard label="Name" value={editable ? (
                    <EditableTextField
                        value={form.name}
                        onChangeText={(text) => handleChange('name', text)}
                        error={errors.name}
                    />
                ) : form.name} />

                <UserDetailsCard label="Email" value={editable ? (
                    <EditableTextField
                        value={form.email}
                        onChangeText={(text) => handleChange('email', text)}
                        error={errors.email}
                    />
                ) : form.email} />

                <UserDetailsCard label="Phone" value={editable ? (
                    <EditableTextField
                        value={form.phone}
                        onChangeText={(text) => handleChange('phone', text)}
                        error={errors.phone}
                        fixedPart="+92 (0) "  // Fixed part to be displayed
                        numeric
                    />
                ) : `+92 (0) ${form.phone}`} />

            </DetailsCardLayout>

            <DetailsCardLayout>
                <SectionTitle title="Employee Information" />

                <UserDetailsCard label="Job Title" value={editable ? (
                    <EditableTextField
                        value={form.jobTitle}
                        onChangeText={(text) => handleChange('jobTitle', text)}
                        error={errors.jobTitle}
                    />
                ) : form.jobTitle} />

                <UserDetailsCard label="Department" value={editable ? (
                    <EditableDropdown
                        selectedValue={form.department}
                        onValueChange={(itemValue) => handleChange('department', itemValue)}
                        options={[
                            { label: 'Sales', value: 'Sales' },
                            { label: 'Marketing', value: 'Marketing' },
                            { label: 'Engineering', value: 'Engineering' },
                            { label: 'HR', value: 'HR' },
                            { label: 'Finance', value: 'Finance' },
                        ]}
                    />
                ) : form.department} />
            </DetailsCardLayout>

            <DetailsCardLayout>
                <SectionTitle title="Company Information" />

                <UserDetailsCard label="Company Name" value={editable ? (
                    <EditableTextField
                        value={form.companyName}
                        onChangeText={(text) => handleChange('companyName', text)}
                        error={errors.companyName}
                    />
                ) : form.companyName} />

                <UserDetailsCard label="Web Address" value={editable ? (
                    <EditableTextField
                        value={form.webAddress}
                        onChangeText={(text) => handleChange('webAddress', text)}
                        error={errors.webAddress}
                    />
                ) : <OpenURLButton url={form.webAddress}>{form.webAddress}</OpenURLButton>} />

                <UserDetailsCard label="Company Address" value={editable ? (
                    <EditableTextField
                        value={form.companyAddress}
                        onChangeText={(text) => handleChange('companyAddress', text)}
                        error={errors.companyAddress}
                    />
                ) : form.companyAddress} />

                <UserDetailsCard label="Location" value={editable ? (
                    <EditableTextField
                        value={form.location}
                        onChangeText={(text) => handleChange('location', text)}
                        error={errors.location}
                    />
                ) : form.location} />
            </DetailsCardLayout>
        </ScreenLayout>
    );
};

const styles = StyleSheet.create({
    ScrollViewFlex: {
        flexGrow: 1,
    },
    User: {
        alignItems: 'center',
    },
    UserName: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#333333'
    },
    UserPosition: {
        fontSize: 16,
        color: '#71717a'
    },
    ButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

export default UserDetailsScreen;


