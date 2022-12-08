import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { MicrofrontendsNullClientV1 } from '../version1/MicrofrontendsNullClientV1';
import { MicrofrontendsDirectClientV1 } from '../version1/MicrofrontendsDirectClientV1';
import { MicrofrontendsHttpClientV1 } from '../version1/MicrofrontendsHttpClientV1';
import { MicrofrontendsLambdaClientV1 } from '../version1/MicrofrontendsLambdaClientV1';

export class MicrofrontendsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-microfrontends', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-microfrontends', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-microfrontends', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-microfrontends', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('pip-services-microfrontends', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(MicrofrontendsClientFactory.NullClientV1Descriptor, MicrofrontendsNullClientV1);
		this.registerAsType(MicrofrontendsClientFactory.DirectClientV1Descriptor, MicrofrontendsDirectClientV1);
		this.registerAsType(MicrofrontendsClientFactory.HttpClientV1Descriptor, MicrofrontendsHttpClientV1);
		this.registerAsType(MicrofrontendsClientFactory.LambdaClientV1Descriptor, MicrofrontendsLambdaClientV1);
	}
	
}
