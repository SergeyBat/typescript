enum PaymentStatus {
	Success = "success",
	Failed = "failed"
}

interface IPayment {
	sum: number;
	from: number;
	to: number;
}

interface IPaymentRequest extends IPayment { }

interface DataSuccess extends IPayment {
	databaseId: number;
}

interface IDataFailed {
	errorMessage: string,
	errorCode: number;
}

interface IResponceSuccess {
	status: PaymentStatus.Success;
	data: DataSuccess;
}

interface IResponceFailed {
	status: PaymentStatus.Failed;
	data: IDataFailed;
}


type Res = IResponceSuccess | IResponceFailed;

function isSuccess(res: Res): res is IResponceSuccess {
	if (res.status === PaymentStatus.Success) {
		return true
	}
	return false

}

function getIdFromData(res: Res): number {
	if (isSuccess(res)) {
		return res.data.databaseId
	} else {
		throw new Error(res.data.errorMessage)
	}
}