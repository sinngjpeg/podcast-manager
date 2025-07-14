export enum ContentType {
    // Tipos comuns para APIs REST
    JSON = "application/json",
    FORM_URLENCODED = "application/x-www-form-urlencoded",
    FORM_DATA = "multipart/form-data",
    TEXT = "text/plain",

    // Tipos HTML/XML
    HTML = "text/html",
    XML = "application/xml",
    TEXT_XML = "text/xml",

    // Tipos para arquivos
    OCTET_STREAM = "application/octet-stream", // binário genérico
    PDF = "application/pdf",
    ZIP = "application/zip",
    CSV = "text/csv",

    // Imagens
    JPEG = "image/jpeg",
    PNG = "image/png",
    GIF = "image/gif",
    SVG = "image/svg+xml",
    WEBP = "image/webp",

    // Áudio e vídeo
    MP3 = "audio/mpeg",
    MP4 = "video/mp4",
    WEBM = "video/webm",

    // Outros
    NDJSON = "application/x-ndjson", // JSON por linha (streaming)
    EVENT_STREAM = "text/event-stream", // Server-Sent Events (SSE)
    JAVASCRIPT = "application/javascript",
    WASM = "application/wasm"
}
