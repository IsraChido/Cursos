import {ServerApp} from "./server-app";
import {CreateTable} from "../domain/use-cases/create-table.use-case";
import {SaveFile} from "../domain/use-cases/save-file.use-case";


describe('ServerApp', () => {

    const options = {
        base: 2,
        limit: 10,
        showTable: false,
        destination: 'test-destination',
        name: 'test-filename',
    };

    beforeEach(() => {
       jest.clearAllMocks();
    });

    test('Should create ServerApp Instance', () => {
        const serverApp = new ServerApp();

        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function');
    });

    test('Should run ServerApp with options', () => {
        /*const logSpy = jest.spyOn(console, 'log');
        const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

        ServerApp.run(options);

        expect(logSpy).toHaveBeenCalledTimes(2);
        expect(logSpy).toHaveBeenCalledWith('Server running...');
        expect(logSpy).toHaveBeenCalledWith('File created!');

        expect(createTableSpy).toHaveBeenCalledTimes(1);
        expect(createTableSpy).toHaveBeenCalledWith({base: options.base, limit: options.limit});

        expect(saveFileSpy).toHaveBeenCalledTimes(1);
        expect(saveFileSpy).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            fileName: options.name,
            fileDestination: options.destination
        });*/
    });

    test('Should run with custom values mocked', () => {
        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createMock = jest.fn().mockReturnValue('1 x 2 = 2');
        const saveFileMock = jest.fn().mockReturnValue(true);

        global.console.log = logMock;
        global.console.error = logErrorMock;
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock;

        ServerApp.run(options);

        expect(logMock).toHaveBeenCalledWith('Server running...');
        expect(createMock).toHaveBeenCalledWith({base: options.base, limit: options.limit});
        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            fileName: options.name,
            fileDestination: options.destination
        });
        expect(logMock).toHaveBeenCalledWith('File created!');
        expect(logErrorMock).not.toHaveBeenCalled();
    })
});