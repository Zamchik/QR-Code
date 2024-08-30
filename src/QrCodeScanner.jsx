export const QrCodeScanner = () => {
    const scanHandler = (result) => {
        console.log(result)
    };

    const settings = {
        audio: false,
        finder: false,
    }

    const styleSettings = {
        container: {width: 350}
    }
    
    return (
        <div>
            <Scanner 
            onScan={scanHandler}
            allowMultiple
            componets={settings}
            style={styleSettings} />;
        </div>
    )
}