import './config/boot';
import { create } from '@koala-ts/framework';
import { appConfig, server } from './config';

const app = create(appConfig);

app.listen(server.port);

console.log(`Server is running on http://localhost:${server.port}`);
