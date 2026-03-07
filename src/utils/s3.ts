interface S3Config {
    baseUrl: string;
    bucket: string;
    path: string;
}

export const s3Config: S3Config = {
    baseUrl: 'https://c846fb63-voos.s3.twcstorage.ru',
    bucket: 'c846fb63-voos',
    path: 'redvus'
};

export const getFullS3Url = (relativePath: string): string => {
    const cleanPath = relativePath.replace(/^\/+|\/+$/g, '');
    return `${s3Config.baseUrl}/${s3Config.path}/${cleanPath}.webp`;
};