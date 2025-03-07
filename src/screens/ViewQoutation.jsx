import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Print from 'expo-print'; // Import the Expo Print module
import WebView from 'react-native-webview';
import { useFormStore } from '../store/qoutationStore';

const ViewQoutation = () => {

    const { name, country } = useFormStore();

    const handlePrint = async () => {
        try {
            // Create the HTML content to print with dynamic form data
            const content = printContent;

            // Use Expo's print API to print the content
            await Print.printAsync({
                html: content,  // Pass the HTML content to be printed
                base64: false
            });
            console.log('Done Printing');
        } catch (error) {
            console.error('Error printing content:', error);
        }
    };

    // Create the HTML for the Content using formData from Zustand
    const webViewContent = `
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=0.5" />
                <style>
                    @page {
                        size: A4;
                        margin: 20mm;
                    }
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 20px 0;
                        width: 100%;
                        height: 100%;
                        box-sizing: border-box;
                    }
                    .page-content {
                        width: 595px; /* A4 width in pixels */
                        height: 842px; /* Automatically adjust height */
                        margin: 0 auto;
                        padding: 40px;
                        border: 1px solid #ddd;
                        box-shadow: 0 0 10px rgba(0,0,0,0.1);
                        page-break-after: always; /* Forces page break after each page-content */
                    }
                    h1 {
                        text-align: center;
                    }
                    p {
                        font-size: 16px;
                    }
                </style>
            </head>
            <body>
                <div class="page-content">
                    <h1>Hello, ${name} from ${country}!</h1>
                    <img
                        src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
                        style="width: 100%;" />
                </div>
                <div class="page-content">
                    <h1>Welcome to the second page of ${name}'s Quotation.</h1>
                    <p>Here is some additional information.</p>
                </div>
                <div class="page-content">
                    <p>This is the third page content.</p>
                    <p>Continue adding content here that would overflow to the next page.</p>
                </div>
            </body>
        </html>
    `;
    const printContent = `
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=0.5" />
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        height: 100%;
                        box-sizing: border-box;
                    }
                    .page-content {
                        margin: 0 auto;
                        padding: 40px;
                        page-break-after: always;
                    }
                    h1 {
                        text-align: center;
                    }
                    p {
                        font-size: 16px;
                    }
                </style>
            </head>
            <body>
                <div class="page-content">
                    <h1>Hello, ${name} from ${country}!</h1>
                    <img
                        src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
                        style="width: 100%;" />
                </div>
                <div class="page-content">
                    <h1>Welcome to the second page of ${name}'s Quotation.</h1>
                    <p>Here is some additional information.</p>
                </div>
                <div class="page-content">
                    <p>This is the third page content.</p>
                    <p>Continue adding content here that would overflow to the next page.</p>
                </div>
            </body>
        </html>
    `;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>View Quotation</Text>
            <WebView
                style={styles.webViewContainer}
                originWhitelist={['*']}
                source={{ html: webViewContent }}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handlePrint}
            >
                <Text style={styles.buttonText}>Print</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default ViewQoutation;
