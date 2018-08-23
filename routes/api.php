<?php

use App\Http\Controllers\Auth\ForgotPasswordController;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');
    Route::post('change-password', 'AuthController@change-password');


});
Route::group([
    'middleware' => 'auth:api',
    'prefix' => 'admin'
],function ($router){

//admin routes begin

    Route::get('/branches','BranchController@all');
    Route::get('/branches/{id}','BranchController@findById');
    Route::post('/branches/create','BranchController@store');
    Route::put('/branches/{id}/update','BranchController@update');
    Route::delete('/branches/{id}/destroy','BranchController@destroy');

    Route::get('/employees/{id}','EmployeeController@findById');
    Route::get('/employees','EmployeeController@all');
    Route::post('/employees/create','EmployeeController@store');
    Route::put('/employees/{id}/update','EmployeeController@update');
    Route::delete('/employees/{id}/destroy','EmployeeController@destroy');

    Route::get('/users','UsersController@all');
    Route::get('/users/{id}','UsersController@findById');
    Route::post('/users/create','UsersController@store');
    Route::put('/users/{id}/update','UsersController@update');
    Route::delete('/users/{id}/destroy','UsersController@destroy');

    Route::get('/services','ServicesController@all');
    Route::get('/services/{id}','ServicesController@findById');
    Route::post('/services/create','ServicesController@store');
    Route::put('/services/{id}/update','ServicesController@update');
    Route::delete('/services/{id}/destroy','ServicesController@destroy');

    Route::get('/categories','CategoryController@all');
    Route::get('/categories/{id}/','CategoryController@findById');
    Route::post('/categories/create','CategoryController@store');
    Route::put('/categories/{id}/update','CategoryController@update');
    Route::delete('/categories/{id}/destroy','CategoryController@destroy');

    Route::get('/customers','CustomerController@all');
    Route::get('/customers/{id}','CustomerController@findById');
    Route::post('/customers/create','CustomerController@store');
    Route::put('/customers/{id}/update','CustomerController@update');
    Route::delete('/customers/{id}/destroy','CustomerController@destroy');

    Route::get('/products','ProductController@all');
    Route::get('/products/{id}','ProductController@findById');
    Route::post('/products/create','ProductController@store');
    Route::put('/products/{id}/update','ProductController@update');
    Route::delete('/products/{id}/destroy','ProductController@destroy');

    Route::get('/appointments','AppointmentController@all');
    Route::post('/appointments/create','AppointmentController@storeAppointment');
    Route::put('/appointments/{id}/update','AppointmentController@update');
    Route::delete('/appointments/{id}/destroy','AppointmentController@destroy');

//admin routes end

});

Route::group([
    'middleware'=>'auth:api',
    'prefix'=>'manager'
],function ($router){

//Manager routes begin
    Route::get('/branches','BranchController@all');

    Route::get('/employees','EmployeeController@branchEmployee');
    Route::get('/employees/{id}','EmployeeController@findById');
    Route::get('/employees/{id}/appointments','EmployeeController@appointment');
    Route::post('/employees/create','EmployeeController@storeByManager');
    Route::put('/employees/{id}/update','EmployeeController@updateByManager');
    Route::delete('/employees/{id}/delete','EmployeeController@destroy');

    Route::get('/services','ServicesController@all');
    Route::get('/services/{id}','ServicesController@findById');
    Route::post('/services/create','ServicesController@store');
    Route::put('/services/{id}/update','ServicesController@update');
    Route::delete('/services/{id}/destroy','ServicesController@destroy');

    Route::get('/categories','CategoryController@all');
    Route::get('/categories/{id}','CategoryController@findById');
    Route::post('/categories/create','CategoryController@store');
    Route::put('/categories/{id}/update','CategoryController@update');
    Route::delete('/categories/{id}/destroy','CategoryController@destroy');

    Route::get('/customers','CustomerController@all');
    Route::get('/customers/{id}/appointments','CustomerController@appointments');
    Route::get('/customers/{id}','CustomerController@findById');
    Route::post('/customers/create','CustomerController@store');
    Route::put('/customers/{id}/update','CustomerController@update');
    Route::delete('/customers/{id}/destroy','CustomerController@destroy');

    Route::get('/products','ProductController@all');
    Route::get('/products/{id}','ProductController@findById');
    Route::post('/products/create','ProductController@store');
    Route::put('/products/{id}/update','ProductController@update');
    Route::delete('/products/{id}/destroy','ProductController@destroy');

    Route::get('/appointments','AppointmentController@branchAppointment');
    Route::get('/appointments/{id}','AppointmentController@findById');
    Route::post('/appointments/create','AppointmentController@storeAppointment');
    Route::put('/appointments/{id}/update','AppointmentController@update');
    Route::delete('/appointments/{id}/destroy','AppointmentController@destroy');

    Route::get('/attendances','AttendanceController@branchAttendance');
    Route::get('/employees/{id}/attendances','AttendanceController@employeeAttendance');
    Route::post('/attendances/create','AttendanceController@create');
    Route::put('/attendances/{id}/update','AttendanceController@update');
    Route::delete('/attendances/{id}/destroy','AttendanceController@destroy');

    Route::get('/payscales','PayScaleController@all');
    Route::get('/payscales/{id}','PayScaleController@find');
    Route::post('/payscales/create','PayScaleController@create');
    Route::put('/payscales/{id}/update','PayScaleController@update');
    Route::delete('/payscales/{id}/destroy','PayScaleController@destroy');

    Route::get('/allowances','AllowanceController@all');
    Route::get('/allowances/{id}','AllowanceController@find');
    Route::post('/allowances/create','AllowanceController@create');
    Route::put('/allowances/{id}/update','AllowanceController@update');
    Route::delete('/allowances/{id}/destroy','AllowanceController@destroy');

    Route::get('/deductions','DeductionController@all');
    Route::get('/deductions/{id}','DeductionController@find');
    Route::post('/deductions/create','DeductionController@create');
    Route::put('/deductions/{id}/update','DeductionController@update');
    Route::delete('/deductions/{id}/destroy','DeductionController@destroy');
////manager routes end
});

Route::group([
    'prefix'=>'pages'
],function ($router){
    Route::post('/reset','\App\Http\Controllers\Auth\ForgotPasswordController@getResetToken');
    Route::get('/token/{token}','\App\Http\Controllers\Auth\ResetPasswordController@reset');
});