<?php

namespace App\Http\Controllers;

use App\Http\Resources\PayscaleCollection;
use App\Http\Resources\PayscaleResource;
use App\PayScale;
use Illuminate\Http\Request;
use Validator;

class PayScaleController extends Controller
{
    public function all()
    {
        return new PayscaleCollection(PayScale::all());
    }
    public function find($id)
    {
        return new PayscaleResource(PayScale::find($id));
    }

    public function create()
    {
        $validator = Validator::make(request()->all(), [
            'name' => 'required',
            'starting' => 'required|numeric',
            'duration' => 'required|numeric',
            'amount' => 'required|numeric',
            'max' => 'required|numeric'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 406);
        }
        $payscale = new PayScale();
        $payscale->name = request('name');
        $payscale->starting = request('starting');
        $payscale->inc_duration = request('duration');
        $payscale->inc_amount = request('amount');
        $payscale->maximum = request('max');
        $payscale->remark = request('remark');

        $payscale->save();
        return new PayscaleResource($payscale);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make(request()->all(), [
            'name' => 'required',
            'starting' => 'required|numeric',
            'duration' => 'required|numeric',
            'amount' => 'required|numeric',
            'max' => 'required|numeric'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 406);
        }
        $payscale=PayScale::find($id);
        $payscale->name = request('name');
        $payscale->starting = request('starting');
        $payscale->inc_duration = request('duration');
        $payscale->inc_amount = request('amount');
        $payscale->maximum = request('max');
        $payscale->remark = request('remark');

        $payscale->save();
        return new PayscaleResource($payscale);
    }

    public function destroy(Request $request, $id)
    {
        PayScale::destroy($id);
        return response()->json(['data' => $id]);
    }
}
