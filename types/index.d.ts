// ~/types/index.d.ts

export {
    IMessage
};

declare global {
    interface IMessage {
        id: Number;
        createdAt: String;
        updatedAt: String;
        deletedAt: String;
        name: String;
        firstName: String;
        phone: String;
        email: String;
        message: String;
    }
}