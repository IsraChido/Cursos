import {ServerApp} from "./presentation/server-app";


describe('Test app.ts', () => {

    test('should call ServerApp.run with values', async () => {
        const serverRunMock = jest.fn();
        ServerApp.run = serverRunMock;

        process.argv = ['node', 'app.ts', '-b', '10', '-l', '20', '-s', '-n', 'test-file', '-d', 'custom-outputs'];

        await import('./app');

        expect(serverRunMock).toHaveBeenCalledWith({
            base: 10,
            limit: 20,
            showTable: true,
            fileName: 'test-file',
            fileDestination: 'custom-outputs',
        })
    });

});